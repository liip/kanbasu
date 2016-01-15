import awesomeplete from 'awesomplete';

class Kanbasu {

	constructor() {
		this.searchField = document.getElementById('search-materials'),
		this.materialsList = document.getElementById('materials-list'),
		this.materials = this.materialsList.querySelectorAll('option');

		this.initSearch();
	}

	/**
	 * Listen for change on the search field
	 */
	initSearch() {
		this.searchField.addEventListener('awesomplete-selectcomplete', (e) => {
			let text = e.currentTarget.value;
			let url = this.getMaterial(text);

			// Reset the value
			e.currentTarget.value = '';

			if (url) {
				window.location = window.location.origin + url;
			}
		});
	}

	/**
	 * Return the corresponding material value from its label
	 * @param  {String} text
	 * @return {String|Bool}
	 */
	getMaterial(text) {
		for (var i = 0; i < this.materials.length; i++) {
			let material = this.materials[i];

			if (material.innerHTML === text) {
				return material.value;
			}
		}
		return false;
	}

}

window.Kanbasu = new Kanbasu();
