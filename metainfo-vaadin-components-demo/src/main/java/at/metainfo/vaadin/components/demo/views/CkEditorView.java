package at.metainfo.vaadin.components.demo.views;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import com.google.gson.Gson;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.confirmdialog.ConfirmDialog;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.notification.Notification.Position;
import com.wontlost.ckeditor.Config;
import com.wontlost.ckeditor.Constants.ConfigType;
import com.wontlost.ckeditor.Constants.EditorType;
import com.wontlost.ckeditor.Constants.Language;
import com.wontlost.ckeditor.Constants.TextPartLanguage;
import com.wontlost.ckeditor.Constants.Toolbar;
import com.wontlost.ckeditor.VaadinCKEditor;
import com.wontlost.ckeditor.VaadinCKEditorBuilder;

import at.metainfo.enhanced.Closeable;
import at.metainfo.enhanced.IEnhancedView;
import elemental.json.Json;
import elemental.json.JsonArray;
import elemental.json.JsonValue;

@CssImport(value = "./styles/vaadin-ckeditor.css")
public class CkEditorView implements IEnhancedView {

	private Path path;
	private String content;
	private VaadinCKEditor editor;

	public CkEditorView(Path path) {
		this.path = path;
		File file = path == null ? null : path.toFile();
		if(file != null && file.exists() && !file.isDirectory()) {
			try {
				content = Files.readString(path);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		this.content = content == null ? "" : content;
	}

	@Override
	public Object titleIcon() {
		return VaadinIcon.TEXT_INPUT.create();
	}

	@Override
	public String title() {
		return path == null ? "Rich Text" : path.getFileName().toString();
	}

	@Override
	public Object object() {
		return path;
	}

	@Override
	public boolean close(Closeable closeable) {
		if(closeable != null) {
			if(Objects.equals(content, editor.getValue())) {
				closeable.close();
			} else {
				new ConfirmDialog(title(), "File changed. Save changes?",
				"Save", event -> {
					try {
						Files.write(path, editor.getValue().getBytes());
						closeable.close();
					} catch (IOException ex) {
						Notification.show("Error during write: " + ex.getMessage(), 5000, Position.MIDDLE);
					}
				},
				"Discard Changes", event -> {
					closeable.close();
				},
				"Cancel", event -> {
					// Stay open
				}).open();
			}
		}
		return true;
	}

	@Override
	public Component createContent() {
		editor = new VaadinCKEditorBuilder().with(builder -> {
			builder.editorType = EditorType.CLASSIC;
			builder.editorData = content;
			builder.config = ckEditorConfig();
			builder.margin = "0";
		}).createVaadinCKEditor();
		return editor;
	}

	private Config ckEditorConfig() {
		Config config = new Config();
		Map<ConfigType, JsonValue> configs = config.getConfigs();

		configs.put(ConfigType.toolbar, toJsonArray(getHelpToolbar()));

		config.setUILanguage(Language.de);

		//conf.enableStandardMode();
		//conf.enableRestrictedMode();

		config.setLanguage(Language.de, Language.en_gb, new TextPartLanguage[] {TextPartLanguage.en_gb, TextPartLanguage.de, TextPartLanguage.sl});
		config.setLink("http://", true);

		config.setCodeBlock("\t", new String[][] {
			{"code", "Code", "text"},
			{"html", "HTML"},
			{"css", "CSS"},
			{"javascript", "Javascript"},
			{"java", "Java"},
			{"fipos", "Fipos Expression", "java"}
		});

		config.setHeading(new String[][] {
			{"paragraph", null, "Paragraph", "ck-heading_paragraph"},
			{"heading1", "h1", "Heading 1", "ck-heading_heading1"},
			{"heading2", "h2", "Heading 2", "ck-heading_heading2"},
			{"heading3", "h3", "Heading 3", "ck-heading_heading3"},
			{"heading4", "h4", "Heading 4", "ck-heading_heading4"}
		});

		config.setImage(new String[][] { 
				{"imageResize:original", "null"},
				{"imageResize:25", "25"},
				{"imageResize:50", "50"},
				{"imageResize:75", "75"}
			}, "%",
			new String[] {},
			new String[] {
				"imageStyle:wrapText",
				"imageStyle:breakText",
				"|",
				"resizeImage",
				"|",
				"toggleImageCaption",
				"imageTextAlternative"
			},
			new String[] {
				"jpeg",
				"png",
				"gif",
				"bmp",
				"webp",
				"tiff",
				"svg+xml"
			}
		);
		
		/* RSC: FIX: If set to true: SET Toolbar(Items) grouping off (WORKAROUND: Avoid resizeObserver error) */
		// config.setEditorToolBarObject(null, true);
		
		return config;
	}

	private JsonArray toJsonArray(Toolbar... toolbar) {
		List<String> values = new ArrayList<>();
		Arrays.stream(toolbar).forEach(item -> values.add(item.getValue()));
		String toolbarJson = new Gson().toJson(values);
		return Json.instance().parse(toolbarJson);
	}

	private Toolbar[] getHelpToolbar() {
		return new Toolbar[] {
//			Toolbar.textPartLanguage,
//			Toolbar.pipe,

			Toolbar.heading,
			Toolbar.fontSize,
			Toolbar.fontFamily,
			Toolbar.fontColor,
			Toolbar.fontBackgroundColor,
			Toolbar.pipe,

			Toolbar.bold,
			Toolbar.italic,
			Toolbar.underline,
			Toolbar.findAndReplace,
			Toolbar.selectAll,
			Toolbar.strikethrough,
			Toolbar.subscript,
			Toolbar.superscript,
			Toolbar.highlight,
			Toolbar.removeFormat,
			Toolbar.code,
			Toolbar.pipe,

			Toolbar.bulletedList,
			Toolbar.numberedList,
			Toolbar.todoList,
			Toolbar.alignment,
			Toolbar.indent,
			Toolbar.outdent,
			Toolbar.horizontalLine,
			Toolbar.pipe,

			Toolbar.blockQuote,
			Toolbar.link,
			Toolbar.imageUpload,
			Toolbar.insertTable,
			Toolbar.codeBlock,
			Toolbar.mediaEmbed,
			Toolbar.htmlEmbed,
			Toolbar.pageBreak,
			//Toolbar.sourceEditing,
			Toolbar.pipe,

			Toolbar.specialCharacters,
			Toolbar.exportPdf,
			Toolbar.exportWord,
			Toolbar.pipe,

			Toolbar.undo,
			Toolbar.redo
		};
	}
}
