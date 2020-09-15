using Mobilize.WebMap.Common.Attributes;

namespace HelloWorld
{
    public partial class Form2
    {
        [Mobilize.WebMap.Common.Attributes.Designer]
        private void InitializeComponent()
        {
            this.textBox1 = new Mobilize.Web.TextBox();
            this.textBox2 = new Mobilize.Web.TextBox();
            this.label1 = new Mobilize.Web.Label();
            this.label2 = new Mobilize.Web.Label();
            this.label3 = new Mobilize.Web.Label();
            this.button1 = new Mobilize.Web.Button();
            this.panel1 = new Mobilize.Web.Panel();

            this.textBox1.Name = "textBox1";
            this.textBox2.Name = "textBox2";
            this.label1.Name = "label1";
            this.label1.Text = "Username";
            this.label2.Name = "label2";
            this.label2.Text = "Password";
            this.label3.Name = "label3";
            this.label3.Text = "Login";
            this.button1.Name = "button1";
            this.button1.Text = "Login";
            this.panel1.Controls.Add(this.textBox2);
            this.panel1.Controls.Add(this.label2);
            this.panel1.Controls.Add(this.textBox1);
            this.panel1.Controls.Add(this.button1);
            this.panel1.Controls.Add(this.label1);
            this.panel1.Name = "panel1";
            this.Controls.Add(this.label3);
            this.Controls.Add(this.panel1);
            this.Name = "HelloWorld.Form2";
            this.Text = "Form2";
        }

        [Intercepted]
        private Mobilize.Web.TextBox textBox1 { get; set; }
        [Intercepted]
        private Mobilize.Web.TextBox textBox2 { get; set; }
        [Intercepted]
        private Mobilize.Web.Label label1 { get; set; }
        [Intercepted]
        private Mobilize.Web.Label label2 { get; set; }
        [Intercepted]
        private Mobilize.Web.Label label3 { get; set; }
        [Intercepted]
        private Mobilize.Web.Button button1 { get; set; }
        [Intercepted]
        private Mobilize.Web.Panel panel1 { get; set; }

    }
}