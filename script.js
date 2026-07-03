/* =====================================
   YANGANF WEBSITE V2.0
   Part 1
===================================== */

*{
margin:0;
padding:0;
box-sizing:border-box;
scroll-behavior:smooth;
}

body{
background:#050505;
color:white;
font-family:Arial,Helvetica,sans-serif;
line-height:1.6;
overflow-x:hidden;
}

a{
text-decoration:none;
color:white;
transition:.3s;
}

ul{
list-style:none;
}

/* NAVBAR */

.navbar{

position:fixed;

top:0;

left:0;

width:100%;

display:flex;

justify-content:space-between;

align-items:center;

padding:20px 8%;

background:rgba(0,0,0,.85);

backdrop-filter:blur(10px);

z-index:1000;

border-bottom:1px solid rgba(212,175,55,.2);

}

.logo{

font-size:1.6rem;

font-weight:800;

letter-spacing:2px;

color:#D4AF37;

}

.nav-links{

display:flex;

gap:22px;

}

.nav-links a{

font-size:.95rem;

font-weight:600;

color:white;

}

.nav-links a:hover{

color:#D4AF37;

}

/* HERO */

.hero{

min-height:100vh;

display:flex;

justify-content:center;

align-items:center;

text-align:center;

padding:120px 25px 80px;

background:
linear-gradient(to bottom,
rgba(0,0,0,.65),
rgba(0,0,0,.92));

}

.hero-content{

max-width:850px;

}

.hero h1{

font-size:4rem;

letter-spacing:5px;

color:white;

text-shadow:
0 0 12px rgba(212,175,55,.45);

margin-bottom:20px;

}

.hero h2{

font-size:2rem;

margin-bottom:25px;

font-weight:700;

color:#ffffff;

}

.hero p{

font-size:1.2rem;

color:#d0d0d0;

max-width:650px;

margin:auto;

margin-bottom:40px;

}

.hero-button{

display:inline-block;

padding:18px 45px;

border-radius:50px;

background:#D4AF37;

color:black;

font-weight:700;

letter-spacing:1px;

transition:.35s;

}

.hero-button:hover{

transform:translateY(-4px);

box-shadow:
0 0 25px rgba(212,175,55,.55);

} /* SECTIONS */

.section{

padding:100px 8%;

text-align:center;

}

.section h2{

font-size:2.5rem;

color:#D4AF37;

margin-bottom:25px;

letter-spacing:1px;

}

.section p{

max-width:850px;

margin:auto;

font-size:1.1rem;

color:#d5d5d5;

line-height:1.8;

}

/* MUSIC CARD */

.music-card{

margin:50px auto;

padding:35px;

max-width:650px;

background:#101010;

border:1px solid rgba(212,175,55,.25);

border-radius:20px;

box-shadow:0 0 30px rgba(212,175,55,.08);

}

.music-card h3{

font-size:1.8rem;

margin-bottom:15px;

color:white;

}

.music-card a{

display:inline-block;

margin:12px;

padding:12px 28px;

border-radius:40px;

background:#D4AF37;

color:black;

font-weight:bold;

}

.music-card a:hover{

transform:translateY(-3px);

}

/* TIMELINE */

.timeline{

max-width:800px;

margin:60px auto;

display:flex;

flex-direction:column;

gap:25px;

}

.timeline-item{

background:#101010;

padding:25px;

border-left:5px solid #D4AF37;

border-radius:12px;

text-align:left;

transition:.3s;

}

.timeline-item:hover{

transform:translateX(8px);

box-shadow:0 0 20px rgba(212,175,55,.25);

}

/* SOCIAL */

.social-links{

display:flex;

justify-content:center;

flex-wrap:wrap;

gap:18px;

margin-top:35px;

}

.social-links a{

padding:14px 30px;

background:#D4AF37;

border-radius:40px;

color:black;

font-weight:bold;

}

.social-links a:hover{

transform:scale(1.05);

}

/* FOOTER */

footer{

padding:70px 20px;

text-align:center;

background:#090909;

border-top:1px solid rgba(212,175,55,.2);

}

footer h2{

color:#D4AF37;

font-size:2rem;

margin-bottom:15px;

}

footer p{

color:#bdbdbd;

margin-top:10px;

}

/* MOBILE */

@media(max-width:768px){

.navbar{

flex-direction:column;

gap:18px;

padding:20px;

}

.nav-links{

flex-direction:column;

text-align:center;

gap:12px;

}

.hero h1{

font-size:3rem;

}

.hero h2{

font-size:1.6rem;

}

.hero p{

font-size:1rem;

}

.section{

padding:70px 25px;

}

.section h2{

font-size:2rem;

}

.music-card{

padding:25px;

}

.social-links{

flex-direction:column;

}

.social-links a{

width:100%;

}

.hero-button{

width:100%;

max-width:320px;

}

} 
