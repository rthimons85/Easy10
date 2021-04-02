using System;

namespace Easy10
{
    public class Challenges
    {
        public int[] AnswerOptions { get; set; }

        public int CorrectAnswer => 10 - LeftNumber;

        public int LeftNumber { get; set; }

  

        public Challenges()
        {
            //generate random number for problem
            //Add correct answer to AnswerOptions
            var rand = new Random();
            LeftNumber = rand.Next(10);
            AnswerOptions = new int[3];
            AnswerOptions[0] = CorrectAnswer;
            for(int i = 1; i < AnswerOptions.Length; i++)
            {
                int temp = rand.Next(9);
                while(temp == AnswerOptions[0] && temp > 0)
                {
                    temp = rand.Next(9);
                }
                AnswerOptions[i] = temp;
            }
        }
    }


}
