// import { addHours, isBefore } from 'date-fns';
import { where } from 'sequelize';

import Info from '../models/Info';

class InfoController {
  async getCoolerInfo(req, res) {
    const cooler = await Info.findOne({
      attributes: ['id', 'cooler_name', 'battery_level', 'temperature'],
    });
    console.log(cooler);
    return res.status(200).json(cooler);
  }
}

export default new InfoController();
