let now = new Date();
let thisYear = now.getFullYear();
export const rangoAnios = [{min10: 2010, min14: 2014, min15: 2015, min18: 2018, min19: 2019, max:thisYear}]

export const Talleres = [
    {desde:rangoAnios[0].min19, hasta: rangoAnios[0].max, tipoEquipoId: null, tipoEquipo: null, NombreTaller: 'NINGUNO', Categoria: null, Id:1},

    {desde:rangoAnios[0].min19, hasta: rangoAnios[0].max, tipoEquipoId: 1, tipoEquipo: 'Liviano', NombreTaller: 'Express Auto Center', Categoria: 'A', Id:2},
    {desde:rangoAnios[0].min19, hasta: rangoAnios[0].max, tipoEquipoId: 1, tipoEquipo: 'Liviano', NombreTaller: 'B&B Auto Center', Categoria: 'A', Id:3},
    

    {desde:rangoAnios[0].min15, hasta: rangoAnios[0].min18, tipoEquipoId: 1, tipoEquipo: 'Liviano', NombreTaller: 'Express Auto Center', Categoria: 'B', Id:4},
    {desde:rangoAnios[0].min15, hasta: rangoAnios[0].min18, tipoEquipoId: 1, tipoEquipo: 'Liviano', NombreTaller: 'BYB Autocenter', Categoria: 'B', Id:5},
    
    
    {desde:rangoAnios[0].min10, hasta: rangoAnios[0].min14, tipoEquipoId: 1, tipoEquipo: 'Liviano', NombreTaller: 'Inversiones Galo', Categoria: 'C', Id:6},
    {desde:rangoAnios[0].min10, hasta: rangoAnios[0].min14, tipoEquipoId: 1, tipoEquipo: 'Liviano', NombreTaller: 'Auto Servicios Union', Categoria: 'C', Id:7},
    {desde:rangoAnios[0].min10, hasta: rangoAnios[0].min14, tipoEquipoId: 1, tipoEquipo: 'Liviano', NombreTaller: 'Soto Automotriz', Categoria: 'C', Id:8},
    {desde:rangoAnios[0].min10, hasta: rangoAnios[0].min14, tipoEquipoId: 1, tipoEquipo: 'Liviano', NombreTaller: 'CAM', Categoria: 'C', Id:9},
    
    {desde:rangoAnios[0].min10, hasta: rangoAnios[0].max, tipoEquipoId: 2, tipoEquipo: 'Pesado', NombreTaller: 'Express Auto Center', Categoria: '', Id:10},
    {desde:rangoAnios[0].min10, hasta: rangoAnios[0].max, tipoEquipoId: 2, tipoEquipo: 'Pesado', NombreTaller: 'Inversiones Galo', Categoria: '', Id:11}
    
]

export const TalleresCategorias = [
    {categoriaId: 1, categoria:null},
    {categoriaId: 2, categoria:'A'},
    {categoriaId: 3, categoria:'B'},
    {categoriaId: 4, categoria:'C'},
]

export const TalleresNoFiltrados = [
    {desde:rangoAnios[0].min19, hasta: rangoAnios[0].max, tipoEquipoId: null, tipoEquipo: null, NombreTaller: 'NINGUNO', Categoria: null, Id:1},

    {desde:rangoAnios[0].min10, hasta: rangoAnios[0].min14, tipoEquipoId: 1, tipoEquipo: 'Liviano', NombreTaller: 'Auto Servicios Union', Categoria: 'C', Id:2},
    {desde:rangoAnios[0].min19, hasta: rangoAnios[0].max, tipoEquipoId: 1, tipoEquipo: 'Liviano', NombreTaller: 'B&B Auto Center', Categoria: 'A', Id:3},
    {desde:rangoAnios[0].min15, hasta: rangoAnios[0].min18, tipoEquipoId: 1, tipoEquipo: 'Liviano', NombreTaller: 'B&B Autocenter', Categoria: 'B', Id:4},
    {desde:rangoAnios[0].min10, hasta: rangoAnios[0].min14, tipoEquipoId: 1, tipoEquipo: 'Liviano', NombreTaller: 'CAM', Categoria: 'C', Id:5},
    {desde:rangoAnios[0].min19, hasta: rangoAnios[0].max, tipoEquipoId: 1, tipoEquipo: 'Liviano', NombreTaller: 'Express Auto Center', Categoria: 'A', Id:6},
    {desde:rangoAnios[0].min15, hasta: rangoAnios[0].min18, tipoEquipoId: 1, tipoEquipo: 'Liviano', NombreTaller: 'Express Auto Center', Categoria: 'B', Id:7},
    {desde:rangoAnios[0].min10, hasta: rangoAnios[0].max, tipoEquipoId: 2, tipoEquipo: 'Pesado', NombreTaller: 'Express Auto Center', Categoria: '', Id:8},
    {desde:rangoAnios[0].min10, hasta: rangoAnios[0].max, tipoEquipoId: 2, tipoEquipo: 'Pesado', NombreTaller: 'Inversiones Galo', Categoria: '', Id:9},
    {desde:rangoAnios[0].min10, hasta: rangoAnios[0].min14, tipoEquipoId: 1, tipoEquipo: 'Liviano', NombreTaller: 'Inversiones Galo', Categoria: 'C', Id:10},
    {desde:rangoAnios[0].min10, hasta: rangoAnios[0].min14, tipoEquipoId: 1, tipoEquipo: 'Liviano', NombreTaller: 'Soto Automotriz', Categoria: 'C', Id:11}
    
    
    
    
    
    
    
    
    
    
]


