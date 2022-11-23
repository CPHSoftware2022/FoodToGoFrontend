
export default async function getItemToFeature(req, res) {
    (await fetch("https://www.greetingsapi.com/random")).json().then((data) => {
        res.status(200).json(data);
    });
  }