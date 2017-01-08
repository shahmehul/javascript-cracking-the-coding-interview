/**
 * Created by mehulshah on 1/8/17.
 * find out how many business day from now.
 */

var businessDaysFromNow = function (date, numDays) {
    var today = date.getDay();
    if ((today === 0 || today === 6) && numDays > 0) numDays -= 1;

    for (var i = 0; i <= numDays; i++) {
        if (today === 6 || today === 0) numDays += 1;
        today = today === 6 ? 0 : today + 1;
    }

    return new Date(date.getTime() + (numDays * 60 * 60 * 24 * 1000));
};

console.log(businessDaysFromNow(new Date(),6));