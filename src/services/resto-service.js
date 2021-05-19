export default class RestoService {
   getMenuItems() {
    let arr = [];
    fetch('http://localhost:3001/menu')
      .then(res => res.json())
      .then(data => arr = data)
    return arr
  }

}
