/* eslint-disable no-console */
class BluetoothConnectionController {
  async connectBluetooth(req, res) {
    const { pin, name } = req.body;

    try {
      if (pin !== 123456) {
        console.log('PIN invalido para conexão.');

        res.json({
          success: false,
          message:
            'Conexão bluetooth invalida. Procure pelo bluetooth do seu cooler!',
        });
      } else {
        console.log(`Conexão Estabelecida! \nPin: ${pin} \nNome: ${name}`);

        res.status(200).json({
          success: true,
          message: `Conexão Estabelecida! \nPin: ${pin} \nNome: ${name}`,
        });
      }
    } catch (err) {
      res
        .status(400)
        .json({ success: false, message: 'Erro ao tentar conectar!' });
    }
  }
}

export default new BluetoothConnectionController();
