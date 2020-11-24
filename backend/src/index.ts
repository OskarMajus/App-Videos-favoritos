import app from './app' 
import './database'         

app.listen(app.get('port'), ()=>{
    console.log('servidor funcionando')//console.log('server on port', app.get('port'))
}) 