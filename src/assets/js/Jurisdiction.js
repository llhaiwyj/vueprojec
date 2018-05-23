 export default{
 	permission(a){

 		
                this.$ajax.post(`${this.$url}/login/selectBtn.html`,{menuID:a}).then(data => {
                    this.rolebtn=eval(data).data;	
                    if(this.rolebtn.m01=="1"){
                    	this.isShowAdd=true;
                    }
                    if(this.rolebtn.m02=="1"){
                    	this.isShowDel=true;
                    }
                    if(this.rolebtn.m03=="1"){
                    	this.isShowUpdate=true;
                    }
//                  alert(this.rolebtn.m01);
			    })
			    .catch((error) => { 
				console.log(error)
				this.$message.error('获取数据失败');
			    })
	},
 }