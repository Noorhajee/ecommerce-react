var user = [
	{
	firstName: "John",
	mName: 'haji'
 },
 {
	 firstName: 'ahmed',
	 mName: 'bdair'
 }
];
 Object.assign(user, {user.lastName: user.firstName + "" + user.mName, age:39});
 console.log(user); 