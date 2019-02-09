function isIntenger (arg) {
	if ((arg % 1) !== 0) {
		return false;
	} else {
		return true;
	}
}
isIntenger(5.1);