<!-- index.html -->
    <!DOCTYPE html>
    <html lang="en">
    <head>

		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">

	    <!-- Basic page information -->
		<meta name="description" content="">
		<meta name="keywords" content="">
		<meta name="author" content="Clas-design">
	    <title></title>

	    <!-- Fav Icon 
	    <link rel="shortcut icon" href="images/favicon.ico">-->

	    <!-- SCROLLS -->
	    <!-- load css and fontawesome-->
	    <!--<link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.0/css/font-awesome.css" />
	    -->
	    <link href="https://fonts.googleapis.com/css?family=Bungee+Shade|Fugaz+One|Ultra" rel="stylesheet">
	    <link rel="stylesheet" type="text/css" href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
		<link rel="stylesheet" type="text/css" href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome-animation/0.0.9/font-awesome-animation.min.css'>
		
	    <link rel="stylesheet" href="css/pd.yeap.css" />


	    <!-- SPELLS -->
	    <!-- load JS Files: on this 1 js file, I have shrunk angular-route, angular, bootstrap, jQuery and my js files  
	     -->	    
	    <script type="text/javascript" src="js/pd.yeap.js"></script>
    </head>

    <body>

        <!-- NAVBAR -->
        <nav class="navbar navbar-inverse navbar-default navbar-fixed-top">
        	<div id="myNav" class="overlay">
	           <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
				  <ul class="overlay-content">
				    <li><a href="#home">Home</a></li>
				    <li><a href="#basic-reseller">Basic Reseller</a></li>
				    <li><a href="#pro-reseller">Pro Reseller</a></li>
				    <li><a href="#support">Customer Support</a></li>
				    <li><a href="#my-account">My Account</a></li>
				    <li><a href="#contact">Contact us</a></li>
				  </ul>
			</div>
			<div class="container-fluid">
				<div class="row">
					  <div class="col-xs-1"><span style="font-size:35px;color:#ff0000;cursor:pointer" onclick="openNav()">&#9776;</span>
					  </div>
					  <div class="col-md-offset-10 col-xs-offset-8 text-right" id="logo"><a href="http://yeapnetwork.net"><img class="img-rounded" src="img/logo.jpg"></a>
					  </div>
				</div>
			</div>
        </nav>
		      
        <!-- HEADER VIDEO COVER-->
        <header id="video-header">
         	<!-- Header Full Screen Video Background -->
	        <video autoplay loop muted poster="img/screenshot.jpg" id="hd-background">
				  <source src="video/yeap-header.mp4" type="video/mp4">
				  <source src="video/yeap-header.ogg" type="video/ogg">
			</video>
			
			  <article class="container-fluid">
			    <div class="row">
			      <div class="col-md-12 text-center hd-video-text">
			        <h1>Yeap Network</h1>
			        <h2>Hosting and App Services Business Opportunity</h2>
			        <!-- Add typeit - a jQuery plugin that allows auto-typing texts -->
			        <h3 id="auto-typing"></h3> 
					<script type="text/javascript">
                   		$('#auto-typing').typeIt({
						     strings: [".RELIABLE .SCALABLE .EFICIENT", ".SECURE .SUSTAINABLE", "YOU ARE A FEW CLICKS AWAY TO BECOME A CERTIFIED HOSTING RESELLER"],
						     speed: 250,
						     breakLines: false,
						     loopDelay: 500
						});
					</script>

			      </div>
			    <div class="row text-center">
			    	<a href="#home">
			      		<div class="col-md-offset-11 fa fa-caret-down faa-bounce animated aria-hidden='true'"></div>
			      	</a>
			    </div>
			  </article>
        </header>

        <!-- SECTIONS AND INJECTED VIEWS -->
        <!-- Section home 21ACBA -->
        <section id="home" data-color="#fff">
        	<div class="container">
	        	<header>
	        		<h1>Home</h1>
	        		<hr class="">
	        	</header>
	        	<div class="row">
		        	<article class="col-md-..">
		        		<header>
		        			<h3></h3>
		        		</header>
		        		<!-- angular templating -->
            			<!-- this is where content will be injected -->
		        	</article>
	        	</div> <!-- End row -->
	        	<!-- Font-awesome carets -->
	        	<div class="row text-left">
	        		<div class="col-md-1 col-none992">
				    	<a href="#hd-background">
				      		<div class="fa fa-caret-up aria-hidden='true'"></div>
				      	</a>
				    </div>
				    <div class="col-md-offset-11 text-right">
				    	<a class="text-right" href="#basic-reseller">
				      		<div class="fa fa-caret-down aria-hidden='true'"></div>
				      	</a>
				    </div>
			    </div> <!-- End font-awesome row -->
        	</div> <!-- End container -->
        	<div class="clear"></div>
        </section>

        <!-- Section basic reseller -->
        <section id="basic-reseller" data-color="#21ACBA">
        	<div class="container-fluid">
	        	<header>
	        		<h1>Basic Reseller</h1>
	        		<hr class="">
	        	</header>
	        	<div class="row">
		        	<article class="col-md-..">
		        		<header>
		        			<h3></h3>
		        		</header>
		        		<!-- angular templating -->
            			<!-- this is where content will be injected -->
		        	</article>
	        	</div> <!-- End row -->
	        	<!-- Font-awesome carets -->
	        	<div class="row text-left">
	        		<div class="col-md-1 col-none992">
				    	<a href="#home">
				      		<div class="fa fa-caret-up aria-hidden='true'"></div>
				      	</a>
				    </div>
				    <div class="col-md-offset-11 text-center">
				    	<a class="text-right" href="#pro-reseller">
				      		<div class="fa fa-caret-down aria-hidden='true'"></div>
				      	</a>
				    </div>
			    </div> <!-- End font-awesome row -->
        	</div> <!-- End container -->
        	<div class="clear"></div>
        </section>


        <!-- Section pro reseller -->
        <section id="pro-reseller" data-color="#fff">
        	<div class="container">
	        	<header>
	        		<h1>Pro Reseller</h1>
	        		<hr class="">
	        	</header>
	        	<div class="row">
		        	<article class="col-md-..">
		        		<header>
		        			<h3></h3>
		        		</header>
		        		<!-- angular templating -->
            			<!-- this is where content will be injected -->
		        	</article>
	        	</div> <!-- End row -->
	        	<!-- Font-awesome carets -->
	        	<div class="row text-left">
	        		<div class="col-md-1 col-none992">
				    	<a href="#basic-reseller">
				      		<div class="fa fa-caret-up aria-hidden='true'"></div>
				      	</a>
				    </div>
				    <div class="col-md-offset-11 text-center">
				    	<a class="text-right" href="#support">
				      		<div class="fa fa-caret-down aria-hidden='true'"></div>
				      	</a>
				    </div>
			    </div> <!-- End font-awesome row -->
        	</div> <!-- End container -->
        	<div class="clear"></div>
        </section>

        <!-- Section support 6A4A3C-->
        <section id="support" data-color="#C0392B">
        	<div class="container-fluid">
	        	<header>
	        		<h1>Support</h1>
	        		<hr class="">
	        	</header>
	        	<div class="row">
		        	<article class="col-md-..">
		        		<header>
		        			<h3></h3>
		        		</header>
		        		<!-- angular templating -->
            			<!-- this is where content will be injected -->
		        	</article>
	        	</div> <!-- End row -->
	        	<!-- Font-awesome carets -->
	        	<div class="row text-left">
	        		<div class="col-md-1 col-none992">
				    	<a href="#pro-reseller">
				      		<div class="fa fa-caret-up aria-hidden='true'"></div>
				      	</a>
				    </div>
				    <div class="col-md-offset-11 text-right">
				    	<a class="text-right" href="#my-account">
				      		<div class="fa fa-caret-down aria-hidden='true'"></div>
				      	</a>
				    </div>
			    </div> <!-- End font-awesome row -->
        	</div> <!-- End container -->
        	<div class="clear"></div>
        </section>

        <!-- Section my account -->
        <section id="my-account" data-color="#fff">
        	<div class="container">
	        	<header>
	        		<h1>My Account</h1>
	        		<hr class="">
	        	</header>
	        	<div class="row">
		        	<article class="col-md-..">
		        		<header>
		        			<h3></h3>
		        		</header>
		        		<!-- angular templating -->
            			<!-- this is where content will be injected -->
		        	</article>
	        	</div> <!-- End row -->
	        	<!-- Font-awesome carets -->
	        	<div class="row text-left">
	        		<div class="col-md-1 col-none992">
				    	<a href="#support">
				      		<div class="fa fa-caret-up aria-hidden='true'"></div>
				      	</a>
				    </div>
				    <div class="col-md-offset-11 text-center">
				    	<a class="text-right" href="#contact">
				      		<div class="fa fa-caret-down aria-hidden='true'"></div>
				      	</a>
				    </div>
			    </div> <!-- End font-awesome row -->
        	</div> <!-- End container -->
        	<div class="clear"></div>
        </section>

        <!-- Section contact us -->
        <section id="contact" data-color="#F88F18">
        	<div class="container-fluid">
	        	<header>
	        		<h1>Contact us</h1>
	        		<hr class="">
	        	</header>
	        	<div class="row">
		        	<article class="col-md-..">
		        		<header>
		        			<h3></h3>
		        		</header>
		        		<!-- angular templating -->
            			<!-- this is where content will be injected -->
		        	</article>
	        	</div> <!-- End row -->
	        	<!-- Font-awesome carets -->
	        	<div class="row text-left">
	        		<div class="col-md-1 col-none992">
				    	<a href="#my-account">
				      		<div class="fa fa-caret-up aria-hidden='true'"></div>
				      	</a>
				    </div>
				    <div class="col-md-offset-11 text-right">
				    	<a class="text-right" href="#footer">
				      		<div class="fa fa-caret-down aria-hidden='true'"></div>
				      	</a>
				    </div>
			    </div> <!-- End font-awesome row -->
        	</div> <!-- End container -->
        	<div class="clear"></div>
        </section>

        <!-- FOOTER-->
        <footer id="footer" data-color="#222222">
        	<article class="container-fluid">        		
        		<div class="row">
	        		<div class="col-xs-12 text-center">
	        			<p>@ Yeap Network 2017, all right reserved, developed by <a href="http://dhaiti.pro/" target="-blank">Peter DHaiti</a></p>
	        		</div>
        		</div>
        		<div class="row text-center">
			    	<a href="#hd-background">
			      		<div class="col-xs-12 fa fa-caret-up faa-bounce animated aria-hidden='true'"></div>
			      	</a>
			    </div>
			</article>       	
        </footer>

    </body>
    </html>