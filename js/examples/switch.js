const role = 'admin';
//const role = 'manager';
//const role = 'user';
//const role = 'anna';

switch(role){
    case 'admin':
        console.log({
            role: 'admin',
            drink: 'beer'
        });
        break;
    case 'manager':
        console.log({
            role: 'manager',
            drink: 'juice'
        });
        break;
    case 'user':
        console.log({
            role: 'user',
            drink: 'water'
        });
        break;

    default:
        throw new Error('Неизвестная роль');
}