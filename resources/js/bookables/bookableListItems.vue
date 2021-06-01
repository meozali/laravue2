<template>
    <div class="col-md-3">
    <div class="card">
        <div class="card-body">
        <h1 class="card-title">{{title}}</h1>        
        <p class="card-content">{{content}}</p>
        </div>
    </div>
    </div>
</template>

<script>
export default {
 props : [
     "title",
     "content"
 ]
};

</script>