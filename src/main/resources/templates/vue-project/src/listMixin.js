export default {
  data(){
    return {
      names: ['fdgh', 'eryhe', 'eryyhger','ertghertgw'],
      searchName: ''
    }
  },
  computed:{
    filteredNames(){
      return this.names.filter(name =>{
        return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
      })
    }
  }
}
