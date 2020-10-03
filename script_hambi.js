
        function toggleHamburgerMenu() {
            var x = document.getElementById("myTopnav");
            if (x.className === "index_head") {
                x.className += " responsive";
            } 
            
            else if (x.className === "index_head responsive"){
                x.className = "index_head";
            }
            else if (x.className === "head2") {
                x.className += " responsive";
            } 
            
            else if (x.className === "head2 responsive"){
                x.className = "head2";
            }
            else {
                alert('Vmi nem ok!');}
        }
   
/*document.getElementsByClassName*/