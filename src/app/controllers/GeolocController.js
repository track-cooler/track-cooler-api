/* eslint-disable no-console */
class GeolocController {
  async receiveGeoloc(req, res) {
    const { lat, lng } = req.body;

    try {
      console.log(
        `Coordenadas recebidas! \nLatitude: ${lat} \nLongitude: ${lng}`
      );

      res.status(200).json({
        success: true,
        message: `Coordenadas recebidas! Latitude: ${lat} Longitude: ${lng}`,
      });
    } catch (err) {
      res
        .status(400)
        .json({ success: false, message: 'Erro ao receber coordenadas!' });
    }
  }
}

export default new GeolocController();
