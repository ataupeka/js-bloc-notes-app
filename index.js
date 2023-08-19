<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bloc-notes App</title>
    <script src="https://kit.fontawesome.com/6439266c9f.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
  
    

<div class="container">

    <h2> Bloc-notes App</h2>

    <div class="container-input">
        <h3>Add a new note</h3>
        <div class="note-wrapper">
            <input type="text" id="note-title" placeholder="Title... ">
            <textarea  rows ="5" placeholder="Write your note here..." id="note-content"> </textarea>
            <button type="button" class="btn"  id="add-note-btn">
                <span> <i class="fas fa-plus"> </i></span> Add Note </button>
        </div>



<div class="note-list">

  <div class="note-item">
    <h3> The title goes here</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

    <button type="button" class="btn-delete"> 
        <span> <i class="fas fa-trash"></i> Remove</span>

    </button>
  </div>

</div>


    </div>

    <button type="button" class="btn" id="delete-all-btn"> 
        <span> <i class="fas fa-trash"></i></span> Delete all </button>
</div>



<script src="index.js"></script>
</body>
</html>
