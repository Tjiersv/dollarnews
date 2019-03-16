import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "./Home.css";
import constantes from "../../utils/constantes";
import LineChart from "../components/LineChart";
import transformLineChartData from "../../services/transformChartData";
import TextField from "@material-ui/core/TextField";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
      fechaInicial: constantes.fechaInicial,
      fechaFinal: constantes.fechaFinal
    };
  }

  componentDidMount() {
    this.getDollarByFechas(this.state.fechaInicial, this.state.fechaFinal);
  }

  getDollarByFechas(fechaInicial, fechaFinal) {
    const url = `${
      constantes.URL_API
    }dolar/periodo/${fechaInicial.anio}/${fechaInicial.mes}/dias_i/${fechaInicial.dia}/${fechaFinal.anio}/${fechaFinal.mes}/dias_f/${fechaFinal.dia}?apikey=${
      constantes.API_KEY
    }&formato=json`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        let confChart = transformLineChartData(data);
        this.setState({
          chartData: confChart
        });
      });
  }

  handleChange(event) {
    let idEvent = event.target.id;
    let fecha = event.target.value;
    
    let data = fecha.split("-");
    let valor = {
         anio: data[0],
          mes: data[1],
          dia: data[2]
    }
    if (idEvent === "date-inicial") {
      this.setState({
        fechaInicial: valor
      });
    } else {
      this.setState({
        fechaFinal: valor
      });
    }
 
    this.getDollarByFechas(this.state.fechaInicial, this.state.fechaFinal);

  }

  render() {
    return (
      <Grid container justify="center">
        <Grid className="title-section" item xs={12}>
          <Grid item xs={3}>
            <h1 className="text-section">DollarNews</h1>
          </Grid>
        </Grid>

        <Grid className="chart-section" item xs={12}>
          <LineChart className="line" chartData={this.state.chartData} />
        </Grid>

        <Grid className="date-section" item xs={2}>
          <TextField
            onChange={this.handleChange.bind(this)}
            required
            id="date-inicial"
            label="Birthday"
            type="date"
            defaultValue="2019-01-01"
            className="date"
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid className="date-section" item xs={2}>
          <TextField
            onChange={this.handleChange.bind(this)}
            required
            id="date-final"
            label="Birthday"
            type="date"
            defaultValue="2019-03-01"
            className="date"
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
      </Grid>
    );
  }
}

export default Home;
