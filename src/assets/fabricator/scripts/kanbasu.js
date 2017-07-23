import awesomeplete from 'awesomplete';

class Kanbasu {

  constructor() {
    this.searchField = document.getElementById('search-materials'),
    this.materialsList = document.getElementById('materials-list'),
    this.materials = this.materialsList.querySelectorAll('option');

    this.initSearch();
  }

  /**
   * Init quick search field
   */
  initSearch() {
    new Awesomplete(this.searchField);

    // Listen for change and go to URL
    this.searchField.addEventListener('awesomplete-selectcomplete', (e) => {

      let text = e.currentTarget.value;
      let url = this.getMaterial(text);

      // Reset the value
      e.currentTarget.value = '';

      if (url) {
        window.location = window.location.origin + url;
      }
    });

    // Autofocus field when there’s no hash in the URL
    if (!window.location.hash.length) {
      this.searchField.focus();
    }
  }

  /**
   * Return the corresponding material value from its label
   * @param  {String} text
   * @return {String|Bool}
   */
  getMaterial(text) {

    for (var i = 0; i < this.materials.length; i++) {
      let material = this.materials[i];

      if (material.value === text) {
        return material.value;
      }
    }
    return false;
  }

}

window.Kanbasu = new Kanbasu();
