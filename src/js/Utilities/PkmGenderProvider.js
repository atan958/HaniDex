/*
/ Provides the correct gender for any Pokemon which are specified one
*/
const providePkmGender = (pkmName) => {
    /*
    / Works for gendered Pokemon with suffixes -m or -f
    */
    const pkmGender = pkmName.slice(pkmName.length-2, pkmName.length);
    /*
    / Works for gendered Pokemon with suffixes -male or -female
    */
    const pkmMale = pkmName.slice(pkmName.length-5, pkmName.length);
    const pkmFemale = pkmName.slice(pkmName.length-7, pkmName.length);

    if(pkmGender === '-m' || pkmMale === '-male') {
        return 'male';
    }
    if(pkmGender === '-f' || pkmFemale === '-female') {
        return 'female';
    }
    return null;
};

export { providePkmGender }