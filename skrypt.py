import riak
client = riak.RiakClient(pb_port=8098)

bucket = client.bucket('s25537')

dog = bucket.new('Jimmy', data={
    'name': 'Jimmy',
    'age': 10,
    'isSick': 'False',
})
dog.store()
print('Dodano rekord')


getdog = bucket.get('Jimmy')
print('Pobrano dane: ' + str(getdog.data))


getdog.data['age'] = 11
getdog.store()

getdog2 = bucket.get('Jimmy')
print('Zmodyfikowane dane: ' + str(getdog2.data))

getPerson2.delete()

getPerson3 = bucket.get('person1')
print('Wynik proby pobrania danych po usunieciu: ' + str(getPerson3.data))
