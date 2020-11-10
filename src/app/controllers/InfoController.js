/* eslint-disable no-console */

import Info from '../models/Info';

function convertTime(millis) {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);

  // console.log(minutes);

  return { minutes, seconds: parseInt(seconds) };
}

class InfoController {
  async handleCoolerInfo(req, res) {
    try {
      // get last info
      let cooler = await Info.findOne({
        attributes: [
          'cooler_name',
          'battery_level',
          'temperature',
          'updated_at',
        ],
        order: [['id', 'DESC']],
      });

      // check time since last update
      const lastDate = cooler.dataValues.updated_at;
      const milliseconds = new Date() - lastDate;

      const time = convertTime(milliseconds);

      console.log('\n tempo transcorrido desde a ultima atualização: ', time);

      // condition for update cooler's info
      if (time.minutes >= 1) {
        cooler = cooler.dataValues;

        delete cooler.updated_at;

        cooler = {
          ...cooler,
          battery_level: cooler.battery_level - 2,
          temperature: cooler.temperature + 2,
        };

        console.log('\n\n novos dados do cooler ', cooler);

        // insert new data
        Info.create(cooler);
      }

      return res.status(200).json(cooler);
    } catch (err) {
      console.log('Erro na solicitação de Informações do Cooler!');

      return res.status(200).json({
        success: false,
        message: 'Erro na solicitação de Informações do Cooler!',
      });
    }
  }
}

export default new InfoController();
