var sliders = document.getElementsByClassName("slider");
var outputs = document.getElementsByClassName("score");

var scores = [];
var max_i = 6;

for (var i = 0; sliders[i]; i++) {
	sliders[i].value = 100 / max_i;
	outputs[i].innerHTML = sliders[i].value;
	scores[i] = parseInt(sliders[i].value);
}

// Update the current slider value (each time you drag the slider handle)
for (var i = 0; i < max_i; i++) {
	sliders[i].oninput = function() {
		var j = parseInt(this.id)
		outputs[j].innerHTML = this.value;
		scores[j] = parseInt(this.value);

		// 计算盈馀
		var subtotal = 0;
		for (var k = 0; k < max_i; k++)
			subtotal += scores[k];
		// console.log("subtotal = " + subtotal.toString());
		var surplus = 100 - subtotal;
		// var adjustment = surplus / (max_i - 1);
		// console.log("adjustment = " + adjustment.toString());

		// 将盈馀分配给各会员
		for (var k = 0; k < max_i; k++)
			if (k != j)
				scores[k] += surplus * (scores[k] / subtotal);

		// update 之
		for (var k = 0; k < max_i; k++) {
			sliders[k].value = scores[k].toString();
			outputs[k].innerHTML = sliders[k].value;
		}

		// calculate grand total
		total = 0;
		for (var k = 0; k < max_i; k++)
			total += parseInt(sliders[k].value);
		document.getElementById("total").innerHTML = total.toString();
		}
	}

