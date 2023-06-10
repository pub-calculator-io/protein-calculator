function calculate() {
	const gender = input.get('gender').raw();
	const activity = input.get('activity').index().val();
	const formula = input.get('formula').index().val();
	const weight = input.get('weight').gt(0).val();
	let height = input.get('height').gt(0).val();
	let age = input.get('age').natural().gte(15).lte(80).val();
	let bodyFat = input.get('fat').gt(0).val();

	let bmr = 0;
	let activityVal = 1;
	switch(activity){
		case 0:
			activityVal = 1;
			break;
		case 1:
			activityVal = 1.2;
			break;
		case 2:
			activityVal = 1.375;
			break;
		case 3:
			activityVal = 1.465;
			break;
		case 4:
			activityVal = 1.55;
			break;
		case 5:
			activityVal = 1.725;
			break;
		case 6:
			activityVal = 1.9;
			break;
	}

	switch(formula) {
		case 0:
			if(gender === 'male') {
				bmr = (10 * weight + (6.25 * height) - (5 * age) + 5);
			}
			else {
				bmr = (10 * weight + (6.25 * height) - (5 * age) - 161);
			}
			break;
		case 1:
			if(gender === 'male') {
				bmr = (13.397 * weight + (4.799 * height) - (5.677 * age) + 88.362);
			}
			else {
				bmr = (9.247 * weight + (3.098 * height) - (4.330 * age) + 447.593);
			}
			break;
		case 2:
			bmr = (370 + 21.6 * (1 - (bodyFat / 100)) * weight);
			break;
	}
	bmr = bmr * activityVal;

	_('result-ada').innerHTML = 'At least ' + weight.toFixed(0) + ' - ' + (weight * 1.8).toFixed(0) + ' grams/day';
	_('result-cdc').innerHTML = ((bmr / 4.11) / 10).toFixed(0) + ' - ' + ((bmr / 4.11) * 0.35).toFixed(0) + ' grams/day (10-35% of daily caloric intake)';
	_('result-who').innerHTML = (weight * 0.84).toFixed(0) + ' grams/day';
}
