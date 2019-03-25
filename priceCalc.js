var priceCalc = function (id) {
    this.itemList = [];
    this.id = id;
    this.init = function () {
        var _self = $("#" + this.id);
        if (!_self.hasClass('priceCalc')) {
            _self.addClass('priceCalc');
        }
        _self.html('');
        _self.append("<div class='body p-3'></div>");
    };
    this.additm = function (pcItem) {

        this.itemList[this.itemList.length] = pcItem;
    };
    this.removeitm = function (itm_id) {
        for (var i = 0; i < this.itemList.length; i++) {
            if (this.itemList[i].id == itm_id) {
                this.itemList.splice(i, 1);
            }
        }
    };
    this.refresh = function () {
        this.init();
        var body = $("#" + this.id + ">.body");
        var total = 0;
        for (var i = 0; i < this.itemList.length; i++) {
            var itm = this.itemList[i];

            body.append("<div class='priceitem form-row'></div>");

            var lastchild = body.find(".priceitem.form-row").last();
            lastchild.append("<div class='form-group col-5'>" + itm.itm + "</div>");
            lastchild.append("<div class='form-group col-3'>x " + itm.qty + "</div>");
            lastchild.append("<div class='form-group col-4'>" + itm.totalprice() + "</div>");
            total += parseFloat(itm.totalprice());
        }
        body.append("<hr/>");
        body.append("<div class='priceitem form-row'></div>");
        var totaldiv = body.find(".priceitem.form-row").last();
        totaldiv.append("<div class='form-group col-5'></div>");
        totaldiv.append("<div class='form-group col-3'></div>");
        totaldiv.append("<div class='form-group col-4'>" + total.toFixed(2) + "</div>");
    };
}
var pcItem = function (id, itm, qty, price) {
    this.id = id;
    this.itm = itm;
    this.price = price;
    this.qty = qty;
    this.totalprice = function () {
        var total = parseFloat(this.price) * parseFloat(this.qty);
        return total.toFixed(2);
    };
    this.display = function () {

        var text = this.itm + " x " + this.qty;
        return text;
    };

}