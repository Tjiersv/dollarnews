import constantes from '../utils/constantes';

const obtenerMesByFecha = fecha => {

    let mes;
    const meses = constantes.meses;
    const mesesNum = constantes.mesesNum;

    let mesFecha = fecha.split('-');

    for (let index = 0; index < mesesNum.length; index++) {
        if (mesesNum[index] === mesFecha[1]) mes = meses[index] + '-' + mesFecha[0];
    }

    console.log("MESsss", mes);

    return mes;

}

const obtenerValorByFecha = valor => {
    let value = valor.split(',')[0];
    return value;
}

const transformLineChartData = dolares => {

    let meses = [];
    let valores = [];

    dolares.Dolares.forEach(dolar => {
        meses.push(obtenerMesByFecha(dolar.Fecha));
        valores.push(obtenerValorByFecha(dolar.Valor));
    });

    const data = {
        labels: meses,
        datasets: [{
            label: 'Dollar',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: valores
        }]
    }

    return data;

}

export default transformLineChartData;