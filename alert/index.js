$(function(){
    const hideAlert=()=>{
        const el=$(".alert");
        if(el.length){
            el.remove();
        }
    }
    
    const showAlert=(type,msg)=>{
        hideAlert();
        const markup=`<div class="alert alert--${type}">${msg}</div>`;
        $('body').prepend(markup);
        window.setTimeout(hideAlert,3000);
    }
    
    const btn=$('.btn');
    btn.on('click',function(){
       showAlert('success','Success message');
    });
})
