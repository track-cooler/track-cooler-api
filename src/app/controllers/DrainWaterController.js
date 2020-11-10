/* eslint-disable no-console */
class DrainWatterController {
  async drainWatter(req, res) {
    try {
      console.log('Drenagem de água Ativada!');

      res
        .status(200)
        .json({ success: true, message: 'Drenagem de água Ativada!' });
    } catch (err) {
      console.log('Erro ao tentar drenagem de água!');

      res
        .status(400)
        .json({ success: false, message: 'Erro ao tentar drenagem de água!' });
    }
  }
}

export default new DrainWatterController();
