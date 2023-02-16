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
			content: "File System Network to storing your project docs",
			path: "/src/lib/assets/technologies/ipfs.png"
		}
	];

</script>

<style>

.container {
  max-width: 900px;
  margin: 0 auto;
  margin-bottom:10%;
  padding: 30px;  
  border-radius: 10px;
}

.articles {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 40px 0;
}

.article {
  width: calc(45.33% - 10px);
  height: 26vh;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  transition: transform .2s; /* Animation */
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 60px;
}

.article:hover {
  transform: scale(1.07); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

</style>

<div class="container">	
	<div class="articles">
		{#each articles as article}
			<div
			style:background-image="url({article.path})" 
			class="article">
				<h3>{article.title}</h3>
				<p>{article.content}</p>
			</div>
		{/each}
	</div>
  </div>
