

namespace HelloWorld
{
    partial class Form2
    {
        [Mobilize.WebMap.Common.Attributes.Designer]
        private void InitializeComponent()
        {
            this.textBox2 = new Mobilize.Web.TextBox();
            this.label2 = new Mobilize.Web.Label();
            this.textBox1 = new Mobilize.Web.TextBox();
            this.button1 = new Mobilize.Web.Button();
            this.label1 = new Mobilize.Web.Label();
            this.panel1 = new Mobilize.Web.Panel();
            this.label3 = new Mobilize.Web.Label();
            // 
            // textBox2
            // 
            this.textBox2.Name = "textBox2";
            // 
            // label2
            // 
            ;
            this.label2.Name = "label2";
            this.label2.Text = "Password";
            // 
            // textBox1
            // 
            this.textBox1.Name = "textBox1";
            // 
            // button1
            // 
            this.button1.Name = "button1";
            this.button1.Text = "Login";
            // 
            // label1
            // 
            this.label1.Name = "label1";
            this.label1.Text = "Username";
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.textBox2);
            this.panel1.Controls.Add(this.label2);
            this.panel1.Controls.Add(this.textBox1);
            this.panel1.Controls.Add(this.button1);
            this.panel1.Controls.Add(this.label1);
            this.panel1.Name = "panel1";
            // 
            // label3
            // 
            this.label3.Name = "label3";
            this.label3.Text = "Login";
            // 
            // Form2
            // 
            this.Controls.Add(this.label3);
            this.Controls.Add(this.panel1);
            this.Name = "HelloWorld.Form2";
            this.Text = "Form2";

        }

        [Mobilize.WebMap.Common.Attributes.Intercepted]

        private Mobilize.Web.TextBox textBox2 { get; set; }

        [Mobilize.WebMap.Common.Attributes.Intercepted]
        private Mobilize.Web.Label label2 { get; set; }

        [Mobilize.WebMap.Common.Attributes.Intercepted]
        private Mobilize.Web.TextBox textBox1 { get; set; }

        [Mobilize.WebMap.Common.Attributes.Intercepted]
        private Mobilize.Web.Button button1 { get; set; }

        [Mobilize.WebMap.Common.Attributes.Intercepted]
        private Mobilize.Web.Label label1 { get; set; }

        [Mobilize.WebMap.Common.Attributes.Intercepted]
        private Mobilize.Web.Panel panel1 { get; set; }

        [Mobilize.WebMap.Common.Attributes.Intercepted]
        private Mobilize.Web.Label label3 { get; set; }
    }
}