<template>
  
    <div  v-if="Bookables != null">
       
        <bookableListItems  :title = "Bookable.title"  :content="Bookable.content" v-for="(Bookable, index ) in Bookables" :key="index"> 
        </bookableListItems>         
        </div>

    <div v-else > 
           loading.....
    </div>
</template>

<script>
import bookableListItems from './bookableListItems'

export default{
components : {
    bookableListItems ,
    columns : 3 
   // Bookables : null
    },
 data  (){
    return {
         Bookables : null ,
          columns : null 
    };
  },

  created(){   
      setTimeout(() => {
         // console.log("ok");
         this.Bookables = 
        [ 
        {
          title : "this is title",
          content : "this is content"  
        }, 
        {
          title : "this is title2",
          content : "this is content2"  
        }                 
        ];
        }, 3000);
  }   

}

</script>