using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace HelloWorld
{

    [Mobilize.WebMap.Common.Attributes.Observable]
    public partial class Form1 : Mobilize.Web.Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, System.EventArgs e)
        {
            this.label1.Text = "Hello World";
        }

        private void button2_Click(object sender, System.EventArgs e)
        {
            this.label1.Text = "Hola Mundo";
        }

        private void button3_Click(object sender, System.EventArgs e)
        {
            var loginForm = new Form2();
            loginForm.ShowDialog();
        }

    }
}