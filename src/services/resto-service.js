export default class RestoService {
  url = 'http://localhost:3001/menu';

  async getMenuItems() {
    const res = await fetch(this.url);
    if (!res.ok){
      throw new Error('Server Error');
    }
    return await res.json();
  }
}
