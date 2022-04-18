const { createClient } = supabase
supabase = createClient(
	'https://rwkjufnlihxmgynzaiec.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3a2p1Zm5saWh4bWd5bnphaWVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDk5NjgzNjIsImV4cCI6MTk2NTU0NDM2Mn0.uzlUFlswDkNp8yJZf9GmM3LB5nHJZAeoDnfl6XX3Vc8'
)

const form = document.querySelector('#form-cadastro')
form.addEventListener('submit', async event => {
	event.preventDefault()

	const formInputs = form.querySelectorAll('input, textarea')

	let submision = {}

	formInputs.forEach(element => {
		const { value, name } = element
		if (value) {
			submision[name] = value
		}
	})

	//console.log(submision)

	const { error } = await supabase
		.from('cadastro')
		.insert([submision], { returning: 'minimal' })

	//console.log(error, data)

	if (error) {
		alert('Houve um erro, por favor tente novamente!')
	} else {
		alert('Cadastro concluído com sucesso!')
	}

	formInputs.forEach(element => (element.value = ''))
})
