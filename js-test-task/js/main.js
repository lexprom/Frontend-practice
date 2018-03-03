const app = new function()
{
    const el = document.getElementById('contacts');
    let CONTACTS = [
        {
            name:"Luke",
            number:"+792132133",
            img:"https://media.giphy.com/media/l3fZZuwvELduur3sA/giphy.gif"
        },
        {
            name:"Han",
            number:"+278649348",
            img:"https://media.giphy.com/media/mWTM1IMLmUbp6/giphy.gif"
        },
        {
            name:"Leia",
            number:"+232335454",
            img:"https://media.giphy.com/media/9zcZ7lTMOHsY/giphy.gif"
        }
    ];

    let backup = CONTACTS;// for filter

    this.Filter = () =>
    {
        const filter = document.getElementById("filter");
        CONTACTS = CONTACTS.filter((el)=>
        {
            let searchValue = el.name.toLowerCase();
            return searchValue.indexOf(filter.value) != -1;
        });

        if(filter.value == "")
        {
            CONTACTS = backup;
            this.FillAll();
        }
        
        this.FillAll();
    }

    this.FillAll = () =>
    {
        let data = '';
        for (let index = 0; index < CONTACTS.length; index++) 
        {
            data += '<tr id='+'"contact"'+'>';
            data += '<td>' + "<img align='left' class='contact-image' src=" + '"'+ CONTACTS[index].img + '"' + " height='60px' width='60px'>" + "<p id='name'>" + CONTACTS[index].name +"</p>" +"   "+"<p id='num'>"+ CONTACTS[index].number +"</p>" + '</td>';
            data += '<td><button onclick="app.Edit(' + index + ')">Edit</button></td>';
            data += '<td><button onclick="app.Delete(' + index + ')">Delete</button></td>';
            data += '</tr>';
        }
        return el.innerHTML = data;
    };

    this.Add = () =>
    {
        na = document.getElementById('add-name');
        nu = document.getElementById('add-number');

        let obj = {
            name:na.value,
            number:nu.value,
            img:"https://media.giphy.com/media/eqfqb1Whs5ANq/giphy.gif"
        }

        if(obj != null)
        {
            CONTACTS.push(obj);
            na.value = '';
            nu.value = '';
            this.FillAll();
        }
    }

    const CloseIn = () =>
    {
        document.getElementById('spoiler').style.display = 'none';
    }

    this.Edit = (item) =>
    {
        let elementName = document.getElementById('edit-name');
        elementName.value = CONTACTS[item].name;
        let elementNum = document.getElementById('edit-num');
        elementNum.value = CONTACTS[item].number;
        document.getElementById('spoiler').style.display = 'block';

        document.getElementById('saveEdit').onsubmit = ()=>
        {
            let name = elementName.value;
            let number = elementNum.value;
            if(name && number)
            {
                CONTACTS[item].name = name;
                CONTACTS[item].number = number;
                this.FillAll();
                CloseIn();
            }
        }
    }

    this.Delete = (item) => 
    {
        CONTACTS.splice(item,1);
        this.FillAll();
    }
}
app.FillAll();