/**
 * util component to display flags for an input country name
 * used to populate country of origin on the product details card
 * @param {*} countryName 
 * @returns 
 */
const getFlag = (countryName) => {
    switch(countryName){
        case 'United States': return '🇺🇸';
        case 'Canada': return '🇨🇦';
        case 'Greece': return '🇬🇷';
        case 'United Kingdom': return '🇬🇧';
        case 'Poland': return '🇵🇱';
        case 'Australia ': return '🇦🇺';
        case 'Turkey': return '🇹🇷';
        case 'China': return '🇨🇳';
        case 'Lithuania': return '🇱🇹';
        case 'Ireland': return '🇮🇪';
        default: return null;

    }
}
export default getFlag