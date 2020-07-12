import React,{Component} from 'react';

class ApplicationForm extends Component{

    state = {
        Department:"",
        Client:"",
        brm:"",
        fundingApprover:"",
        enhancement:"",
        Ingestion:"",
        Dissemination:"",
        inbound:"",
        outbound:"",
        frequency:"",
        volume:"",
        Aggregation:"",
        AckNaks:"",
        Enrichment:"",
        connection:"",
        selfservice:"",
        subApp:"",
        owners:"",
        SVP:"",
        GQS:"",
        BusinessTester:""

}

    onChangehandlerText=(event)=>{
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    onChangehandlerRadio=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render(){
        return( 
        <div className="container">
            <h2>Application for development request</h2>
       <form>
           <div className="form-group col-md-6">
               <label for="Department">Business unit/Department</label>
               <input class="form-control" type="text" placeholder="" id="Department" onChange={this.onChangehandlerText} value={this.state.Department}/>
           </div>

           <div className="form-group col-md-6">
               <label for="Client">Client Name</label>
               <input class="form-control" type="text" placeholder="" id="Client" onChange={this.onChangehandlerText} value={this.state.Client}/>
           </div>

           <div className="form-group col-md-6">
               <label for="brm">Business Relationship Manager</label>
               <input class="form-control" type="text" placeholder="" id="brm" onChange={this.onChangehandlerText} vlaue={this.state.brm}/>
           </div>

           <div className="form-group col-md-6">
               <label for="fundingApprover">Funding Approver</label>
               <input class="form-control" type="text" placeholder="" id="fundingApprover" onChange={this.onChangehandlerText} value={this.state.fundingApprover}/>
           </div>

           <div className="form-group col-md-6">
               <span>If this is an enhancement to an existing process?</span>
               <div class="form-check form-check-inline">
                   <input class="form-check-input" type="radio" id="inlineradio1" name="enhancement" value="yes" onChange={this.onChangehandlerRadio} />
                   <label class="form-check-label" for="inlineradio1">Yes</label>
               </div>
               <div class="form-check form-check-inline">
                   <input class="form-check-input" type="radio" id="inlineradio2" name="enhancement" value="no" onChange={this.onChangehandlerRadio} />
                   <label class="form-check-label" for="inlineradio2">NO</label>
               </div>
           </div>

           <div class="form-group">
               <label for="Ingestion">Ingestion source</label>
               <select class="form-control" id="Ingestion" onChange={this.onChangehandlerText} value={this.state.Ingestion}>
               <option>SFTP</option>
               <option>Secure Transport</option>
               <option>Connect Direct</option>
               <option>NAS Storage</option>
               <option>Swift</option>
               <option>email</option>
               <option>Samba share</option>
               <option>MQ</option>
               <option>Kafka</option>
               <option>webservice</option>
               <option>gRPC</option>
               <option>JDBC</option>
               <option>Scheduler</option>
               <option>Manual</option>
               </select>
               <label for="Ingestion">Others</label>
               <input class="form-control" type="text" placeholder="" id="Ingestion" onChange={this.onChangehandlerText} value={this.state.Ingestion}/>
           </div>
           
           <div class="form-group">
               <label for="Dissemination">Dissemination sink</label>
               <select class="form-control" id="Dissemination" onChange={this.onChangehandlerText}>
               <option>SFTP</option>
               <option>Secure Transport</option>
               <option>Connect Direct</option>
               <option>NAS Storage</option>
               <option>Swift</option>
               <option>email</option>
               <option>Samba share</option>
               <option>MQ</option>
               <option>Kafka</option>
               <option>webservice</option>
               <option>gRPC</option>
               <option>JDBC</option>
               <option>UI</option>
               </select>
               <label for="Dissemination">Others</label>
               <input class="form-control" type="text" placeholder="" id="Dissemination" onChange={this.onChangehandlerText}/>
           </div>

           <div class="form-group">
               <label for="inbound">Expected inbound file format</label>
               <select class="form-control" id="inbound" onChange={this.onChangehandlerText}>
               <option>CSV</option>
               <option>Fixed Width</option>
               <option>Excel</option>
               <option>Swift MT</option>
               <option>Swift MX</option>
               <option>XML</option>
               <option>FIX</option>
               <option>FPML</option>
               <option>PDF</option>
               <option>Image (OCR)</option>
               <option>JSON</option>
               <option>AVRO</option>
               <option>Raw Text</option>
               <option>Delimited</option>
               </select>
               <label for="inbound">Others</label>
               <input class="form-control" type="text" placeholder="" id="inbound" onChange={this.onChangehandlerText}/>
           </div>
           <div class="form-group">
               <label for="outbound">Expected outbound file format</label>
               <select class="form-control" id="outbound" onChange={this.onChangehandlerText}>
               <option>CSV</option>
               <option>Fixed Width</option>
               <option>Excel</option>
               <option>Swift MT</option>
               <option>Swift MX</option>
               <option>XML</option>
               <option>FIX</option>
               <option>FPML</option>
               <option>PDF</option>
               <option>Image (OCR)</option>
               <option>JSON</option>
               <option>AVRO</option>
               <option>Raw Text</option>
               <option>Delimited</option>
               </select>
               <label for="outbound">Others</label>
               <input class="form-control" type="text" placeholder="" id="outbound" onChange={this.onChangehandlerText}/>
           </div>

           <div class="form-group">
               <label for="frequency">Inbound frequency</label>
               <select  class="form-control" id="frequency" onChange={this.onChangehandlerText}>
               <option>Real time</option>
               <option>Hourly</option>
               <option>Daily</option>
               <option>weekly </option>
               </select>
               <label for="frequency">Others</label>
               <input class="form-control" type="text" placeholder="" id="frequency" onChange={this.onChangehandlerText}/>
           </div>

           <div className="form-group col-md-6">
               <label for="volume">Expected volume frequency per day</label>
               <input class="form-control" type="number" placeholder="" id="volume"onChange={this.onChangehandlerText}/>
           </div>

           <div className="form-group col-md-6">
               <span>Aggregation required ?</span>
               <div class="form-check form-check-inline">
                   <input class="form-check-input" type="radio" id="Aggregation1" name="Aggregation" value="yes"onChange={this.onChangehandlerRadio}/>
                   <label class="form-check-label" for="Aggregation1">Yes</label>
               </div>
               <div class="form-check form-check-inline">
                   <input class="form-check-input" type="radio" id="Aggregation2" name="Aggregation" value="no" onChange={this.onChangehandlerRadio}/>
                   <label class="form-check-label" for="Aggregation2">NO</label>
               </div>
           </div>

           <div className="form-group col-md-6">
               <span>AckNaks required ?</span>
               <div class="form-check form-check-inline">
                   <input class="form-check-input" type="radio" id="AckNaks1" name="AckNaks" value="yes" onChange={this.onChangehandlerRadio}/>
                   <label class="form-check-label" for="AckNaks1">Yes</label>
               </div>
               <div class="form-check form-check-inline">
                   <input class="form-check-input" type="radio" id="AckNaks2" name="AckNaks" value="no" onChange={this.onChangehandlerRadio}/>
                   <label class="form-check-label" for="AckNaks2">NO</label>
               </div>
           </div>

           <div className="form-group col-md-6">
               <span>Are Enrichment services required</span>
               <div class="form-check form-check-inline">
                   <input class="form-check-input" type="radio" id="Enrichment1" name="Enrichment" value="yes" onChange={this.onChangehandlerRadio}/>
                   <label class="form-check-label" for="Enrichment1">Yes</label>
               </div>
               <div class="form-check form-check-inline">
                   <input class="form-check-input" type="radio" id="Enrichment2" name="Enrichment" value="no" onChange={this.onChangehandlerRadio}/>
                   <label class="form-check-label" for="Enrichment2">NO</label>
               </div>
           </div>

           <div className="form-group col-md-6">
               <span>Is an external connection needed ?</span>
               <div class="form-check form-check-inline">
                   <input class="form-check-input" type="radio" id="connection1" name="connection" value="yes" onChange={this.onChangehandlerRadio}/>
                   <label class="form-check-label" for="connection1">Yes</label>
               </div>
               <div class="form-check form-check-inline">
                   <input class="form-check-input" type="radio" id="connection2" name="connection" value="no" onChange={this.onChangehandlerRadio}/>
                   <label class="form-check-label" for="connection2">NO</label>
               </div>
           </div>

           <div className="form-group col-md-6">
               <span>Require professional service for self-service mapping ?</span>
               <div class="form-check form-check-inline">
                   <input class="form-check-input" type="radio" id="self-service1" name="selfservice" value="yes" onChange={this.onChangehandlerRadio}/>
                   <label class="form-check-label" for="self-service1">Yes</label>
               </div>
               <div class="form-check form-check-inline">
                   <input class="form-check-input" type="radio" id="self-service2" name="selfservice" value="no" onChange={this.onChangehandlerRadio}/>
                   <label class="form-check-label" for="self-service2">NO</label>
               </div>
           </div>

           <div className="form-group col-md-6">
               <span>Is this a new sub-app</span>
               <div class="form-check form-check-inline">
                   <input class="form-check-input" type="radio" id="sub-app1" name="subApp" value="yes" onChange={this.onChangehandlerRadio}/>
                   <label class="form-check-label" for="self-service1">Yes</label>
               </div>
               <div class="form-check form-check-inline">
                   <input class="form-check-input" type="radio" id="sub-app2" name="subApp" value="no" onChange={this.onChangehandlerRadio}/>
                   <label class="form-check-label" for="sub-app2">NO</label>
               </div>
           </div>

           <div className="form-group col-md-6">
                   <label for="owners">Atrack Project and Request to be used</label>
                   <input class="form-control" type="text" placeholder="" id="owners" onChange={this.onChangehandlerText}/>
           </div>

           <div className="form-group col-md-6">
                   <label for="SVP">SVP appointed business relationship contact who would sign off on requirement</label>
                   <input class="form-control" type="text" placeholder="" id="SVP" onChange={this.onChangehandlerText}/>
           </div>

           <div className="form-group col-md-6">
               <span>Is GQS needed</span>
               <div class="form-check form-check-inline">
                   <input class="form-check-input" type="radio" id="GQS1" name="GQS" value="yes" onChange={this.onChangehandlerRadio}/>
                   <label class="form-check-label" for="GQS1">Yes</label>
               </div>
               <div class="form-check form-check-inline">
                   <input class="form-check-input" type="radio" id="GQS2" name="GQS" value="no" onChange={this.onChangehandlerRadio}/>
                   <label class="form-check-label" for="GQS2">No</label>
               </div>
           </div>

           <div className="form-group col-md-6">
                   <label for="BusinessTester">Business tester to sign off the final product</label>
                   <input class="form-control" type="text" placeholder="" id="BusinessTester" onChange={this.onChangehandlerText}/>
           </div>
           <div className="form-group col-md-6">
                   <label for="BusinessTester">Expected Production release date</label>
                   <input class="form-control" type="date" placeholder="" id="BusinessTester" onChange={this.onChangehandlerText}/>
           </div>
          
               <button type="submit" className="btn btn-primary">Submit</button>
           </form>
       </div>
       )
       
    }
}

export default ApplicationForm;