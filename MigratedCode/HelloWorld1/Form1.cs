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

    }
}