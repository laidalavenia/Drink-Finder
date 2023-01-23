class DrinkItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set drink(drink) {
    this._drink = drink;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :host {
          display: block;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
        }
        
        .fan-art-drink {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
        }
        
        .drink-info {
          padding: 24px;
        }
        
        .drink-info > h2 {
          font-weight: lighter;
        }
        
        .drink-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
      </style>

      <img class="fan-art-drink" src="${this._drink.strDrinkThumb}" alt="${this._drink.strDrink}">
      <div class="drink-info">
        <h2>${this._drink.strDrink}</h2>
        <p>${this._drink.strInstructions}</p>
      </div>
    `;
  }
}

customElements.define('drink-item', DrinkItem);
