LESS_DIR = ./static/less
LESS_FILE = style.less
CSS_DIR = ./static/css
CSS_FILE = style.min.css
CSS_TMP_FILE = tmp.css
current_dir = $(shell pwd)

.PHONY: clean build

build: clean
	lessc $(LESS_DIR)/$(LESS_FILE) > $(CSS_DIR)/$(CSS_TMP_FILE)
	uglifycss $(CSS_DIR)/$(CSS_TMP_FILE) > $(CSS_DIR)/$(CSS_FILE)
	rm -f $(CSS_DIR)/$(CSS_TMP_FILE)

demo: build
	mkdir -p exampleSite/themes/africa
	mkdir -p exampleSite/themes/africa/archetypes
	mkdir -p exampleSite/themes/africa/images
	mkdir -p exampleSite/themes/africa/layouts
	mkdir -p exampleSite/themes/africa/static
	cp -r $(current_dir)/archetypes/* exampleSite/themes/africa/archetypes/
	cp -r $(current_dir)/images/* exampleSite/themes/africa/images
	cp -r $(current_dir)/layouts/* exampleSite/themes/africa/layouts
	cp -r $(current_dir)/static/* exampleSite/themes/africa/static
	cp -r $(current_dir)/theme.toml exampleSite/themes/africa/theme.toml
	cd exampleSite && hugo serve -D

clean:
	rm -f $(CSS_DIR)/*.css
	rm -rf exampleSite/themes/africa
