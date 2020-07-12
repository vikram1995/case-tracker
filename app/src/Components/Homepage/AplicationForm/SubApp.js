import React,{Component} from 'react';

class SubApps extends Component{
    render(){
        return(
            
        <div>
                <div className="form-group col-md-6">
                    <label for="APP_NAME">APP NAME </label>
                    <input class="form-control" type="text" placeholder="" id="APP_NAME"/>
                </div>

            
                <div className="form-group col-md-6">
                    <label for="owners">Business owners who would be owing the entitlements</label>
                    <input class="form-control" type="text" placeholder="" id="owners"/>
                </div>
            
               

        </div>
        )
    }
}