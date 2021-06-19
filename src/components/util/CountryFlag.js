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

    }
}
export default getFlag