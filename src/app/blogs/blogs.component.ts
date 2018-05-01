import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  public tech = {
    title1: 'Check Out My Blogs',
    title2: 'I\'m a front-end developer with experience in styling + markup languages, and JavaScript frameworks.',
    blog1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummytext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimenbook.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiallyunchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  };

  public blogs = [
    {
      title: 'Blog 1',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummytext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimenbook.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiallyunchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      title: 'Blog 2',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummytext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimenbook.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiallyunchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      title: 'Blog 3',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummytext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimenbook.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiallyunchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
