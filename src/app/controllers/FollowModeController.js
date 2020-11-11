/* eslint-disable no-console */
class FollowModeController {
  async handleFollowMode(req, res) {
    const { status } = req.body;

    try {
      console.log('Mode Seguir: ', status);

      res.status(200).json({
        success: true,
        message: `'Mode Seguir: ${status}`,
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        message: 'Ocorreu um erro an tentar alterar Modo Seguir!',
      });
    }
  }
}

export default new FollowModeController();
