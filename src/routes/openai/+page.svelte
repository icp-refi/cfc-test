<script>
	
	export let title = "My New Product";
	export let articles = [
		{
			title: "Farity",
			content: "Token to achieve equality between people"
		},
		{
			title: "Sircle",
			content: "Token to recycle energy used by earth health projects"
		},
		{
			title: "Smart contracts Hivex",
			content: "Integration of ethereum smart contracts to historicize projects"
		},
    {
			title: "Inter-Planetary File System",
			content: "File System Network to storing your project docs"
		}
	];

</script>

<style>
  .container {
        width: 800px;
        height: 450px;
        position: relative;
        margin: 30px;
      }
      .box {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.7;
        background: #dfe2e5;
        border-radius: 20px;

      }
      .overlay {
        z-index: 9;
        margin: 30px;
        border-radius: 20px;
        background: #a0d0b2;
        text-align: center;

      }
      </style>

<body>    
    <div class="container">
      
      <div class="box"></div>
      <div class="box overlay"> </div>
    </div>
  </body>
