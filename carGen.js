const carFactory = (brand, model, color) => {
    return {
        _brand: [[_model, 
                _color]],
        
        get brand() {
            return this.brand;
        },
        set brand(newBrand) {
            this._brand = newBrand;
        },
        
    }
}