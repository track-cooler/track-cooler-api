/* eslint-disable no-console */
class DrainCommand {
  async receiveCommand(req, res) {
    const { command } = req.body;

    try {
      console.log( 'Comando recebido ' , command);

      res.status(200).json({
        success: true,
        message: `Água está sendo escoada`,
      });
    } catch (err) {
      res
        .status(400)
        .json({ success: false, message: 'Erro ao receber o comando de escoar' });
    }
  }
}

export default new DrainCommand();
